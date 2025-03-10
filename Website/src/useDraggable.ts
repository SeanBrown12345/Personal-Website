import { useState, useCallback, useRef, useEffect } from 'react';

const useDraggable = () => {
  const initx = window.innerWidth < 500 ? 0 : 50;
  const inity = window.innerWidth < 500 ? 0 : 50;
  const [position, setPosition] = useState({ x: initx, y: inity });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const handleRef = useRef<HTMLDivElement | null>(null);

  const onMouseDown = useCallback((e: MouseEvent) => {
    if (handleRef.current && handleRef.current.contains(e.target as Node)) {
      setIsDragging(true);
      setOffset({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    }
  }, [position]);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      const { innerWidth, innerHeight } = window;
      const { offsetWidth, offsetHeight } = handleRef.current || { offsetWidth: 0, offsetHeight: 0 };

      const newX = Math.max(0, Math.min(e.clientX - offset.x, innerWidth - offsetWidth));
      const newY = Math.max(0, Math.min(e.clientY - offset.y, innerHeight - offsetHeight));

      setPosition({
        x: newX,
        y: newY,
      });
    }
  }, [isDragging, offset]);

  const onMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  }, [onMouseDown, onMouseMove, onMouseUp]);

  return {
    position,
    handleRef,
  };
};

export default useDraggable;
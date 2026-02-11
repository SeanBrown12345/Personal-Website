import { useState, useCallback, useRef, useEffect } from 'react';

const useDraggableThree = () => {
  const initx = window.innerWidth < 500 ? 0 : 300;
  const inity = window.innerWidth < 500 ? 0 : 10;
  const [position3, setPosition] = useState({ x: initx, y: inity });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const handleRef3 = useRef<HTMLDivElement | null>(null);

  const onMouseDown = useCallback((e: MouseEvent) => {
    if (handleRef3.current && handleRef3.current.contains(e.target as Node)) {
      setIsDragging(true);
      setOffset({
        x: e.clientX - position3.x,
        y: e.clientY - position3.y,
      });
    }
  }, [position3]);

  const onMouseMove = useCallback((e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
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
    position3,
    handleRef3,
  };
};

export default useDraggableThree;
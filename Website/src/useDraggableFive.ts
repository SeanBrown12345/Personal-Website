import { useState, useCallback, useRef, useEffect } from 'react';

const useDraggableFive = () => {
  
  const initx = window.innerWidth < 500 ? 0 : 70;
  const inity = window.innerWidth < 500 ? 0 : 70;
  const [position5, setPosition] = useState({ x: initx, y: inity });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const handleRef5 = useRef<HTMLDivElement | null>(null);

  const onMouseDown = useCallback((e: MouseEvent) => {
    if (handleRef5.current && handleRef5.current.contains(e.target as Node)) {
      setIsDragging(true);
      setOffset({
        x: e.clientX - position5.x,
        y: e.clientY - position5.y,
      });
    }
  }, [position5]);

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
    position5,
    handleRef5,
  };
};

export default useDraggableFive;
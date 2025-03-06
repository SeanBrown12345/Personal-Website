import { useState, useCallback, useRef, useEffect } from 'react';

const useDraggableTwo = () => {
  const [position2, setPosition] = useState({ x: 300, y: 40 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const handleRef2 = useRef<HTMLDivElement | null>(null);

  const onMouseDown = useCallback((e: MouseEvent) => {
    if (handleRef2.current && handleRef2.current.contains(e.target as Node)) {
      setIsDragging(true);
      setOffset({
        x: e.clientX - position2.x,
        y: e.clientY - position2.y,
      });
    }
  }, [position2]);

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
    position2,
    handleRef2,
  };
};

export default useDraggableTwo;
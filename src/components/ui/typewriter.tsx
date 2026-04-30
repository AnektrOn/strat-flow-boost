import { useEffect, useRef, useState } from "react";

interface TypewriterProps {
  words: string[];
  speed?: number;
  delayBetweenWords?: number;
  cursor?: boolean;
  cursorChar?: string;
  loop?: boolean;
  deleteAfterWord?: boolean;
  onComplete?: () => void;
}

export function Typewriter({
  words,
  speed = 100,
  delayBetweenWords = 2000,
  cursor = true,
  cursorChar = "|",
  loop = true,
  deleteAfterWord = true,
  onComplete,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const completedRef = useRef(false);

  const safeWords = words.length > 0 ? words : [""];
  const currentWord = safeWords[wordIndex];

  useEffect(() => {
    if (!loop && completedRef.current) return;

    const timeout = window.setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentWord.length) {
            setDisplayText(currentWord.substring(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
            return;
          }

          if (!deleteAfterWord) {
            const isLastWord = wordIndex === safeWords.length - 1;
            if (isLastWord) {
              if (!loop) {
                completedRef.current = true;
                onComplete?.();
                return;
              }
              setWordIndex(0);
              setCharIndex(0);
              setDisplayText("");
              return;
            }

            setWordIndex((prev) => prev + 1);
            setCharIndex(0);
            setDisplayText("");
            return;
          }

          window.setTimeout(() => {
            setIsDeleting(true);
          }, delayBetweenWords);
          return;
        }

        if (charIndex > 0) {
          setDisplayText(currentWord.substring(0, charIndex - 1));
          setCharIndex((prev) => prev - 1);
          return;
        }

        const isLastWord = wordIndex === safeWords.length - 1;
        if (isLastWord && !loop) {
          completedRef.current = true;
          onComplete?.();
          return;
        }

        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % safeWords.length);
      },
      isDeleting ? speed / 2 : speed,
    );

    return () => window.clearTimeout(timeout);
  }, [
    charIndex,
    currentWord,
    delayBetweenWords,
    deleteAfterWord,
    isDeleting,
    loop,
    onComplete,
    safeWords.length,
    speed,
    wordIndex,
  ]);

  useEffect(() => {
    if (!cursor) return;

    const cursorInterval = window.setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => window.clearInterval(cursorInterval);
  }, [cursor]);

  return (
    <div className="inline-block">
      <span>
        {displayText}
        {cursor && (
          <span className="ml-1 transition-opacity duration-75" style={{ opacity: showCursor ? 1 : 0 }}>
            {cursorChar}
          </span>
        )}
      </span>
    </div>
  );
}

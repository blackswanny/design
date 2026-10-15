"use client";

import { useEffect, useRef, useState } from "react";

import styles from "./contactSection.module.css";
import sharedStyles from "./home/headerHero.module.css";

import type { PointerEvent } from "react";

function copyWithSelection(email: string) {
  const field = document.createElement("textarea");
  const focused = document.activeElement;
  const selection = window.getSelection();
  const ranges = selection
    ? Array.from({ length: selection.rangeCount }, (_, index) =>
        selection.getRangeAt(index).cloneRange(),
      )
    : [];

  field.value = email;
  field.readOnly = true;
  field.tabIndex = -1;
  field.setAttribute("aria-hidden", "true");
  Object.assign(field.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "1px",
    height: "1px",
    opacity: "0",
    pointerEvents: "none",
  });
  document.body.appendChild(field);

  try {
    field.focus({ preventScroll: true });
    field.select();
    field.setSelectionRange(0, email.length);
    // Compatibility fallback for browsers and previews blocking Clipboard API.
    if (!document.execCommand("copy")) throw new Error("Copy was blocked");
  } finally {
    field.remove();
    if (focused instanceof HTMLElement) focused.focus({ preventScroll: true });
    if (selection) {
      selection.removeAllRanges();
      ranges.forEach((range) => selection.addRange(range));
    }
  }
}

export default function CopyEmail({ email }: Readonly<{ email: string }>) {
  const [message, setMessage] = useState("");
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const [name, domain] = email.split("@");
  const copied = message === "Email copied!";

  useEffect(() => {
    const hide = () => {
      if (hintRef.current) hintRef.current.dataset.visible = "false";
    };

    window.addEventListener("blur", hide);
    window.addEventListener("scroll", hide, { passive: true, capture: true });

    return () => {
      if (resetTimer.current) clearTimeout(resetTimer.current);
      window.removeEventListener("blur", hide);
      window.removeEventListener("scroll", hide, true);
    };
  }, []);

  const hideHint = () => {
    if (hintRef.current) hintRef.current.dataset.visible = "false";
  };

  const moveHint = (event: PointerEvent<HTMLButtonElement>) => {
    const hint = hintRef.current;
    if (!hint || event.pointerType !== "mouse") {
      hideHint();
      return;
    }

    const x = Math.max(
      12,
      Math.min(event.clientX + 18, window.innerWidth - hint.offsetWidth - 12),
    );
    const y = Math.max(
      12,
      Math.min(event.clientY + 18, window.innerHeight - hint.offsetHeight - 12),
    );

    hint.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    hint.dataset.visible = "true";
  };

  const copy = async () => {
    if (resetTimer.current) clearTimeout(resetTimer.current);

    try {
      try {
        await navigator.clipboard.writeText(email);
      } catch {
        copyWithSelection(email);
      }
      setMessage("Email copied!");
    } catch {
      setMessage("Couldn’t copy — please try again.");
    }

    resetTimer.current = setTimeout(() => setMessage(""), 2500);
  };

  return (
    <div className={styles.emailBlock}>
      <button
        type="button"
        onClick={copy}
        onPointerEnter={moveHint}
        onPointerMove={moveHint}
        onPointerLeave={hideHint}
        onPointerCancel={hideHint}
        className={`${sharedStyles.sectionHeading} ${styles.email}`}
        aria-label={`Copy email address ${email}`}
      >
        {name}
        <em>@</em>
        {domain}
      </button>
      <div
        ref={hintRef}
        className={`${sharedStyles.primary} ${styles.copyHint}`}
        data-visible="false"
        data-copied={copied}
        aria-hidden="true"
      >
        <span>{copied ? "Email copied!" : "Click to copy email"}</span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <rect
            x="9"
            y="9"
            width="11"
            height="11"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M15 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h3"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          {copied && (
            <path
              d="m12 14.5 2 2 3-3"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </div>
      <span className={styles.copyStatus} role="status" aria-live="polite">
        {message}
      </span>
    </div>
  );
}

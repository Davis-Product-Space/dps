'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  AnimatePresence,
  animate as animateValue,
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type MotionValue,
} from 'framer-motion';
import { whatWeOfferPhases, type WhatWeOfferCard } from '@/data/what-we-offer-cards';

type PieceId = 'product' | 'client' | 'capstone' | 'fellowship';

type PieceSpec = {
  id: PieceId;
  label: string;
  left: number;
  top: number;
  width: number;
  height: number;
  startLeft: number;
  startTop: number;
  zIndex: number;
};

type PathwayDetail = {
  label: string;
  eyebrow: string;
  description: string;
  accent: string;
  cards: WhatWeOfferCard[];
};

const PIECES: PieceSpec[] = [
  { id: 'product', label: 'Product', left: 8.72, top: 6.38, width: 61.05, height: 68.58, startLeft: 35, startTop: -1, zIndex: 1 },
  { id: 'client', label: 'Client', left: 13.08, top: 33.97, width: 27.33, height: 47.53, startLeft: 0, startTop: 49, zIndex: 2 },
  { id: 'capstone', label: 'Capstone', left: 38.95, top: 44.02, width: 26.16, height: 37.64, startLeft: 0, startTop: 8, zIndex: 3 },
  { id: 'fellowship', label: 'Fellowship', left: 40.55, top: 59.97, width: 53.92, height: 32.06, startLeft: 37, startTop: 70, zIndex: 4 },
];

const productCards: WhatWeOfferCard[] = [
  {
    id: 'understand-users',
    icon: '/images/case_studies.svg',
    title: 'Understand Users',
    description: 'Start with real people, real needs, and the context behind every problem.',
  },
  {
    id: 'shape-the-vision',
    icon: '/images/learn_product.svg',
    title: 'Shape the Vision',
    description: 'Turn insight into a clear strategy that aligns teams around what matters.',
  },
  {
    id: 'build-together',
    icon: '/images/cohort.svg',
    title: 'Build Together',
    description: 'Partner with design, engineering, and business to bring ideas to life.',
  },
  {
    id: 'ship-with-purpose',
    icon: '/images/calendar.svg',
    title: 'Ship With Purpose',
    description: 'Learn from outcomes, iterate deliberately, and create products people love.',
  },
];

const PATHWAY_DETAILS: Record<PieceId, PathwayDetail> = {
  product: {
    label: 'Product',
    eyebrow: 'The destination',
    description: 'Bring every stage together and develop the judgment to lead products from insight to impact.',
    accent: '#5A356F',
    cards: productCards,
  },
  client: {
    label: 'Client',
    eyebrow: 'Apply your craft',
    description: 'Work on real industry challenges, collaborate with stakeholders, and deliver measurable value.',
    accent: '#66417B',
    cards: whatWeOfferPhases[2].cards,
  },
  capstone: {
    label: 'Capstone',
    eyebrow: 'Practice the process',
    description: 'Take a product from discovery through design, validation, strategy, and presentation.',
    accent: '#8C5CAC',
    cards: whatWeOfferPhases[1].cards,
  },
  fellowship: {
    label: 'Fellowship',
    eyebrow: 'Build your foundation',
    description: 'Learn product fundamentals with an ambitious cohort and guidance from industry professionals.',
    accent: '#B06BC7',
    cards: whatWeOfferPhases[0].cards,
  },
};

function PieceArtwork({ id }: { id: PieceId }) {
  if (id === 'product') {
    return (
      <svg viewBox="60 40 420 430" className="h-full w-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id="puzzle-product-gradient" x1="109" y1="132" x2="419" y2="404" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7A5D87" />
            <stop offset="1" stopColor="#433849" />
          </linearGradient>
        </defs>
        <path
          d="M79.4246 108.033C79.291 103.236 84.1577 98.9153 92.0968 96.782L260.764 51.3602C268.409 49.3058 277.741 49.5943 285.298 52.1187L441.977 104.902C448.579 107.415 454.216 111.748 454.216 116.367L454.208 443.869C454.238 445.892 450.078 447.055 446.767 445.949L270.294 387.01L89.4773 436.815C85.1195 438.072 79.5854 436.301 79.5109 433.625L79.4246 108.033Z"
          fill="url(#puzzle-product-gradient)"
        />
        <path
          d="M79.4089 108.033C79.2754 103.236 84.142 98.9153 92.0812 96.782L260.748 51.3602C268.393 49.3058 277.725 49.5943 285.282 52.1187L441.962 104.902C448.564 107.415 454.201 111.748 454.201 116.367L454.193 217.869C454.222 219.892 450.062 221.055 446.751 219.949L270.279 161.01L89.4616 210.815C85.1038 212.072 79.5697 210.301 79.4952 207.625L79.4089 108.033Z"
          fill="white"
        />
        <text x="133" y="248" fill="white" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="700" transform="rotate(-15 133 248)">
          Product
        </text>
      </svg>
    );
  }

  if (id === 'client') {
    return (
      <svg viewBox="90 213 188 298" className="h-full w-full overflow-visible" aria-hidden="true">
        <path
          d="M266.992 500.602L101.276 445.494C100.868 445.359 100.592 444.977 100.592 444.546V271.122C100.595 271.094 100.616 271.001 100.77 270.861C100.945 270.701 101.263 270.51 101.78 270.359L266.988 224.774L266.992 500.602Z"
          fill="#66417B"
          stroke="#66417B"
          strokeWidth="2"
        />
        <path d="M101.419 272.986C98.8235 272.119 98.8045 270.144 101.385 269.395L267.859 223.461L267.864 328.293L101.419 272.986Z" fill="white" />
        <text x="137" y="323" fill="white" fontFamily="Inter, sans-serif" fontSize="25" fontWeight="700" transform="rotate(18 137 323)">
          Client
        </text>
      </svg>
    );
  }

  if (id === 'capstone') {
    return (
      <svg viewBox="268 276 180 236" className="h-full w-full overflow-visible" aria-hidden="true">
        <path d="M436.457 339.777V457.921L279.315 501.232L279.32 287.994L436.457 339.777Z" fill="#9966B7" stroke="#9966B7" strokeWidth="2.5" />
        <path d="M437.688 338.874L278.047 382.72L278.053 286.266L437.688 338.874Z" fill="white" />
        <text x="307" y="405" fill="white" fontFamily="Inter, sans-serif" fontSize="23" fontWeight="700" transform="rotate(-15 307 405)">
          Capstone
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="279 376 371 201" className="h-full w-full overflow-visible" aria-hidden="true">
      <defs>
        <linearGradient id="puzzle-fellowship-gradient" x1="318" y1="420" x2="627" y2="549" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7A3F98" />
          <stop offset="1" stopColor="#B36ED0" />
        </linearGradient>
      </defs>
      <path
        d="M487.004 566.143L635.733 524.998C637.496 524.489 638.381 523.564 638.388 522.615V446.615C638.396 445.649 637.497 444.659 635.696 444.057L463.056 386.39L290.416 433.845L290.416 509.845L456.837 565.435C466.164 568.551 477.72 568.822 487.004 566.143Z"
        fill="url(#puzzle-fellowship-gradient)"
      />
      <path d="M290.422 433.845L463.061 386.389L635.702 444.057C639.275 445.251 639.296 447.971 635.739 448.997L487.01 490.143C477.726 492.822 465.17 492.55 456.843 489.435L290.422 433.845Z" fill="white" />
      <text x="315" y="478" fill="white" fontFamily="Inter, sans-serif" fontSize="28" fontWeight="700" transform="rotate(18 315 478)">
        Fellowship
      </text>
    </svg>
  );
}

function snapMotionValue(value: MotionValue<number>, destination: number, reducedMotion: boolean) {
  return animateValue(
    value,
    destination,
    reducedMotion
      ? { duration: 0 }
      : { type: 'spring', stiffness: 235, damping: 23, mass: 0.72 },
  );
}

function DraggablePiece({
  spec,
  boardSize,
  placed,
  selected,
  boardRef,
  onPlace,
  onSelect,
}: {
  spec: PieceSpec;
  boardSize: { width: number; height: number };
  placed: boolean;
  selected: boolean;
  boardRef: React.RefObject<HTMLDivElement | null>;
  onPlace: (id: PieceId) => void;
  onSelect: (id: PieceId) => void;
}) {
  const reducedMotion = useReducedMotion();
  const startX = ((spec.startLeft - spec.left) / 100) * boardSize.width;
  const startY = ((spec.startTop - spec.top) / 100) * boardSize.height;
  const x = useMotionValue(startX);
  const y = useMotionValue(startY);
  const tilt = useMotionValue(0);
  const smoothTilt = useSpring(tilt, { stiffness: 180, damping: 18, mass: 0.5 });
  const dragged = useRef(false);

  useEffect(() => {
    if (!placed) {
      x.set(startX);
      y.set(startY);
    }
  }, [boardSize.height, boardSize.width, placed, startX, startY, x, y]);

  const placePiece = () => {
    tilt.set(0);
    snapMotionValue(x, 0, Boolean(reducedMotion));
    snapMotionValue(y, 0, Boolean(reducedMotion));
    onPlace(spec.id);
    onSelect(spec.id);
  };

  const returnPiece = () => {
    tilt.set(0);
    snapMotionValue(x, startX, Boolean(reducedMotion));
    snapMotionValue(y, startY, Boolean(reducedMotion));
  };

  return (
    <motion.button
      type="button"
      data-puzzle-piece={spec.id}
      aria-label={placed ? `Show ${spec.label} information` : `Place the ${spec.label} piece`}
      aria-pressed={placed}
      drag={!placed}
      dragConstraints={boardRef}
      dragElastic={0.16}
      dragMomentum={false}
      dragTransition={{ bounceStiffness: 260, bounceDamping: 24, power: 0.2, timeConstant: 180 }}
      onDragStart={() => {
        dragged.current = true;
      }}
      onDrag={(_, info) => {
        tilt.set(Math.max(-5, Math.min(5, info.velocity.x / 650)));
      }}
      onDragEnd={() => {
        tilt.set(0);
        const snapDistance = Math.max(54, boardSize.width * 0.12);
        if (Math.hypot(x.get(), y.get()) <= snapDistance) placePiece();
        else returnPiece();
        window.setTimeout(() => {
          dragged.current = false;
        }, 0);
      }}
      onClick={() => {
        if (dragged.current) return;
        if (placed) onSelect(spec.id);
        else placePiece();
      }}
      onFocus={() => {
        if (placed) onSelect(spec.id);
      }}
      whileHover={placed ? { scale: 1.01 } : { scale: 1.025 }}
      whileDrag={{ scale: 1.035, cursor: 'grabbing', zIndex: 30 }}
      style={{
        x,
        y,
        rotate: smoothTilt,
        left: `${spec.left}%`,
        top: `${spec.top}%`,
        width: `${spec.width}%`,
        height: `${spec.height}%`,
        zIndex: spec.zIndex,
        filter: selected
          ? 'drop-shadow(0 16px 22px rgba(102, 65, 123, 0.28))'
          : placed
            ? 'drop-shadow(0 12px 18px rgba(57, 48, 62, 0.18))'
            : 'drop-shadow(0 10px 16px rgba(57, 48, 62, 0.14))',
      }}
      className={`absolute touch-none border-0 bg-transparent p-0 text-left outline-none transition-[filter] duration-300
                  focus-visible:rounded-2xl focus-visible:ring-4 focus-visible:ring-[#A674C4]/40
                  ${placed ? 'cursor-pointer' : 'cursor-grab'}`}
    >
      <PieceArtwork id={spec.id} />
    </motion.button>
  );
}

export function WhatWeOffer() {
  const boardRef = useRef<HTMLDivElement>(null);
  const [boardSize, setBoardSize] = useState({ width: 688, height: 627 });
  const [placedPieces, setPlacedPieces] = useState<PieceId[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<PieceId | null>(null);
  const [resetKey, setResetKey] = useState(0);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const board = boardRef.current;
    if (!board) return;
    const updateSize = () => {
      const rect = board.getBoundingClientRect();
      setBoardSize({ width: rect.width, height: rect.height });
    };
    updateSize();
    const observer = new ResizeObserver(updateSize);
    observer.observe(board);
    return () => observer.disconnect();
  }, []);

  const assembled = placedPieces.length === PIECES.length;
  const selectedDetail = selectedPiece ? PATHWAY_DETAILS[selectedPiece] : null;
  const progressLabel = useMemo(
    () => `${placedPieces.length} of ${PIECES.length} steps placed`,
    [placedPieces.length],
  );

  const handlePlace = (id: PieceId) => {
    setPlacedPieces((current) => (current.includes(id) ? current : [...current, id]));
  };

  const resetPuzzle = () => {
    setPlacedPieces([]);
    setSelectedPiece(null);
    setResetKey((current) => current + 1);
  };

  return (
    <div className="relative mx-auto w-full max-w-[1380px] pb-10 md:pb-20">
      <div className="mb-8 flex flex-col items-center gap-3 px-3 text-center md:mb-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#9966B7] sm:text-sm">The Staircase of Product</p>
        <p className="max-w-2xl font-sans text-base leading-7 text-[#5E5662] sm:text-lg">
          Drag each step into place. As the staircase comes together, each stage reveals what it unlocks.
        </p>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(440px,1.05fr)] lg:gap-10 xl:gap-14">
        <div className="relative px-1 sm:px-3">
          <div className="mb-1 flex min-h-9 items-center justify-end">
            <button
              type="button"
              onClick={resetPuzzle}
              disabled={placedPieces.length === 0}
              className="px-2 py-1 text-xs font-semibold text-[#78508B] underline decoration-[#D5C0DF] underline-offset-4
                         transition hover:text-[#4E2E5D] disabled:cursor-not-allowed disabled:opacity-0"
            >
              Reset staircase
            </button>
          </div>

          <motion.div
            data-puzzle-board
            animate={assembled && !reducedMotion
              ? { filter: ['drop-shadow(0 0 0 rgba(166,116,196,0))', 'drop-shadow(0 18px 30px rgba(166,116,196,0.24))', 'drop-shadow(0 0 0 rgba(166,116,196,0))'] }
              : { filter: 'drop-shadow(0 0 0 rgba(166,116,196,0))' }}
            transition={{ duration: 1.4, ease: 'easeInOut' }}
            className="relative aspect-[688/627] w-full overflow-visible"
            ref={boardRef}
          >
            <div
              className="pointer-events-none absolute inset-[11%] rounded-full bg-[radial-gradient(circle,rgba(202,154,213,0.20),rgba(202,154,213,0)_68%)] blur-2xl"
              aria-hidden="true"
            />
            <img
              src="/images/homepage_ps_logo.svg"
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full object-contain opacity-[0.075] grayscale"
            />

            <div className="pointer-events-none absolute inset-x-0 top-1 z-10 flex justify-center">
              <motion.div
                key={progressLabel}
                initial={reducedMotion ? false : { opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                className="px-3 py-1.5 text-xs font-semibold tracking-wide text-[#78508B]"
              >
                {assembled ? 'Staircase complete' : progressLabel}
              </motion.div>
            </div>

            {PIECES.map((spec) => (
              <DraggablePiece
                key={`${spec.id}-${resetKey}`}
                spec={spec}
                boardSize={boardSize}
                placed={placedPieces.includes(spec.id)}
                selected={selectedPiece === spec.id}
                boardRef={boardRef}
                onPlace={handlePlace}
                onSelect={setSelectedPiece}
              />
            ))}

            <span className="sr-only" aria-live="polite">
              {assembled ? 'The Staircase of Product is complete.' : progressLabel}
            </span>
          </motion.div>

          <div className="mt-3 grid grid-cols-4 gap-2" aria-label="Staircase progress">
            {[...PIECES].reverse().map((piece) => {
              const isPlaced = placedPieces.includes(piece.id);
              return (
                <button
                  type="button"
                  key={piece.id}
                  disabled={!isPlaced}
                  onClick={() => setSelectedPiece(piece.id)}
                  className={`rounded-full px-2 py-2 text-[10px] font-semibold transition sm:text-xs
                    ${isPlaced
                      ? selectedPiece === piece.id
                        ? 'bg-[#66417B] text-white shadow-md'
                        : 'bg-white/70 text-[#66417B] shadow-sm hover:bg-[#F3EAF7]'
                      : 'bg-transparent text-[#9B929F]'}`}
                >
                  {isPlaced ? '✓ ' : ''}{piece.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="min-h-[620px] rounded-[32px] border border-[#EEE4F1] bg-white p-5 shadow-[0_24px_70px_-40px_rgba(102,65,123,0.36)] sm:p-7 md:p-9">
          <AnimatePresence mode="wait">
            {selectedDetail ? (
              <motion.div
                key={selectedPiece}
                initial={reducedMotion ? false : { opacity: 0, y: 16, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -10, filter: 'blur(4px)' }}
                transition={{ duration: reducedMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="mb-6 flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-2 text-xs font-bold uppercase tracking-[0.22em]" style={{ color: selectedDetail.accent }}>
                      {selectedDetail.eyebrow}
                    </p>
                    <h3 className="font-inter text-3xl font-semibold text-[#3A3A3A] sm:text-4xl">{selectedDetail.label}</h3>
                  </div>
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg font-bold text-white shadow-lg"
                    style={{ background: selectedDetail.accent }}
                    aria-hidden="true"
                  >
                    {placedPieces.indexOf(selectedPiece as PieceId) + 1}
                  </span>
                </div>

                <p className="mb-7 max-w-xl font-sans text-base leading-7 text-[#625A65] sm:text-lg">
                  {selectedDetail.description}
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {selectedDetail.cards.map((card, index) => (
                    <motion.article
                      key={card.id}
                      initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: reducedMotion ? 0 : 0.06 + index * 0.055, duration: 0.3 }}
                      className="group rounded-2xl border border-[#EEE4F1] bg-[#FAF6FC] p-4 transition-colors hover:border-[#D9C4E3] hover:bg-[#F8F1FB]"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                        <img src={card.icon} alt="" className="h-6 w-6 object-contain" />
                      </div>
                      <h4 className="mb-1.5 font-inter text-sm font-bold leading-5 text-[#3A3A3A] sm:text-base">{card.title}</h4>
                      <p className="font-sans text-xs leading-5 text-[#6E6671] sm:text-sm">{card.description}</p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="instructions"
                initial={reducedMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reducedMotion ? undefined : { opacity: 0, y: -8 }}
                className="flex min-h-[540px] flex-col items-center justify-center px-4 text-center"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#F2E8F6] text-[#66417B] shadow-[inset_0_0_0_1px_rgba(166,116,196,0.18)]">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <path d="M8 12.5L20 6L32 12.5L20 19L8 12.5Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
                    <path d="M8 20.5L20 27L32 20.5" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M8 28L20 34L32 28" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-[#9966B7]">The Staircase of Product</p>
                <h3 className="mb-4 font-inter text-3xl font-semibold text-[#3A3A3A] sm:text-4xl">Start with any step.</h3>
                <p className="max-w-md font-sans text-base leading-7 text-[#6E6671] sm:text-lg">
                  Each step represents a stage of the Product Space experience. Place one to explore what it unlocks.
                </p>
                <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#66417B]">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#A674C4]" />
                  Drag or tap a step to begin
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

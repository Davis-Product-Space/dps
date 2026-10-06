import Script from 'next/script';

export default function ClientApplicationPage() {
  return (
    <main className="min-h-screen bg-[#FAF6FC] text-[#3a3a3a] flex flex-col">
      <Script src="https://tally.so/widgets/embed.js" strategy="afterInteractive" />
      <section className="mt-[150px] flex-grow pb-20">
        <div className="text-center px-5 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-inter text-[#3A3A3A]">
            Client Applications are now Live!
          </h1>
          <p className="text-lg md:text-xl text-[#3A3A3A] max-w-2xl mx-auto font-['M_PLUS_1']">
            Interested in working with Product Space? Apply to become a client below!
          </p>
        </div>

        <div className="max-w-5xl mx-auto w-full px-5 md:px-10 py-10">
          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-[0_10px_30px_rgba(102,65,123,0.06)] border border-[#66417b15]">
            <iframe
              data-tally-src="https://tally.so/r/kdMeGM"
              title="PS Fall 26-27 Client Application"
              className="w-full rounded-2xl"
              width="100%"
              height="800"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              loading="eager"
              style={{
                background: "transparent",
                border: "none",
                minHeight: "800px",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ApplicationPage() {
  return (
    <main className="min-h-screen bg-[#FAF6FC] text-[#3a3a3a] flex flex-col">
      <section className="mt-[150px] flex-grow pb-20">
        <div className="text-center px-5 md:px-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-inter text-[#3A3A3A]">
            Fellowship Applications are now Live!
          </h1>
          <p className="text-lg md:text-xl text-[#3A3A3A] max-w-2xl mx-auto font-['M_PLUS_1']">
            Thank you for showing interest in our Fellowship! Apply below!
          </p>
        </div>

        {/* Foreground content */}
        <div className="max-w-5xl mx-auto w-full px-5 md:px-10 py-10">
          <div className="bg-white rounded-3xl p-4 md:p-8 shadow-[0_10px_30px_rgba(102,65,123,0.06)] border border-[#66417b15]">
            <iframe
              className="airtable-embed w-full rounded-2xl"
              src="https://airtable.com/embed/applB6ALK2RDymQXp/pag4y927E1RQNRvmZ/form"
              frameBorder="0"
              width="100%"
              height="533"
              style={{
                background: 'transparent',
                border: 'none',
                minHeight: '533px',
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

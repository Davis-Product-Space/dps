export default function ApplicationPage() {
  return (
    <main className="min-h-screen bg-[#FAF6FC] text-[#3a3a3a] flex flex-col">
      <section className="mt-[150px] flex-grow">
        <div className="text-center px-5 md:px-0">
          <h1 className="text-4xl font-bold text-[#3A3A3A] mb-4">
            Fellowship Application
          </h1>
          <p className="text-lg text-[#3A3A3A]">
            Thank you for showing interest in our Fellowship! Apply below!
          </p>
        </div>

        {/* Foreground content */}
        <div className="relative py-10 px-5 md:px-20 w-full">
          <iframe
            className="airtable-embed w-full"
            src="https://airtable.com/embed/appJg9h5I5wubZWja/pag4y927E1RQNRvmZ/form"
            height="533"
            style={{
              background: 'transparent',
              border: '1px solid #ccc',
            }}
          />
        </div>
      </section>
    </main>
  );
}

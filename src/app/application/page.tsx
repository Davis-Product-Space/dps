export default function ApplicationPage() {
  return (
    <main className="min-h-screen bg-[#FAF6FC] text-[#3a3a3a] flex flex-col items-center justify-center">
      <div className="text-center pt-10">
        <h1 className="text-4xl font-bold text-[#3A3A3A] mb-4">
          Fellowship Application
        </h1>
        <p className="text-lg text-[#3A3A3A]">
          Thank you for showing interest in our Fellowship! Apply below!
        </p>
      </div>
      {/* Foreground content */}
      <div className="relative pt-10 px-20 w-full">
        <iframe 
          className="airtable-embed" 
          src="https://airtable.com/embed/appJg9h5I5wubZWja/pag4y927E1RQNRvmZ/form" 
          //onmousewheel="" 
          width="100%" height="533" 
          style={{
            background: 'transparent',
            border: '1px solid #ccc'
          }}>
        </iframe>
      </div>
    </main>
  );
}

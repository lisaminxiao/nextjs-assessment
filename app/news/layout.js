export default function NewsLayout({ children }) {
    return (
      <div>
        <section className="section">
          <div className="container">
            <main>{children}</main>
          </div>
        </section>
      </div>
    );
  }
  
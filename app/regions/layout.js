export default function RegionLayout({ children }) {
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
  
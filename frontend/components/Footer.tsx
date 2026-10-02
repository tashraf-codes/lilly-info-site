export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-neutral-600">
        <p className="max-w-3xl">
          This website is an independent, informational project and is{" "}
          <strong>not affiliated with, endorsed by, or operated by Eli Lilly and Company</strong>.
          Content is for general educational purposes only, is not medical advice, and should not
          be used to make treatment decisions. Always consult a qualified healthcare professional
          and official prescribing information before making decisions about any medicine.
        </p>
        <p className="mt-4 text-neutral-400">
          &copy; {new Date().getFullYear()} Lilly Info Project. Built for educational purposes.
        </p>
      </div>
    </footer>
  );
}

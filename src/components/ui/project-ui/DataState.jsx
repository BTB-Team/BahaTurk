import Container from "./Container";

/** Shared loading / error / empty handling so sections don't repeat it. */
export default function DataState({ loading, error, isEmpty, children }) {
  const message = loading
    ? "Loading…"
    : error
      ? "We couldn't load this content. Please try again shortly."
      : isEmpty
        ? "Nothing to show yet."
        : null;

  if (message === null) return children;

  return (
    <Container className="py-24 text-center">
      <p role={error ? "alert" : "status"} className="muted">
        {message}
      </p>
    </Container>
  );
}

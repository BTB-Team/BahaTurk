export default function NotFoundPage() {
  return (
    <section
      aria-label="404 page background"
      style={{
        position: "relative",
        width: "100%",
        height: "628px",
        marginTop: "65px",
        backgroundColor: "rgba(15, 153, 204, 0.17)",
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}images/Main_Design_404.png`}
        alt="Oops, 404. The page you requested could not be found."
        style={{
          position: "absolute",
          width: "min(562px, calc(100% - 32px))",
          height: "auto",
          top: "139px",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 1,
        }}
      />
    </section>
  );
}

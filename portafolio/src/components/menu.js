import Link from "next/link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-around",
  },
  botones: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "192px",
    height: "66px",
    backgroundColor: "rgba(25, 163, 82, 0.5)",
    border: "1px solid #19A352",
  },
  foto: {
    borderRadius: "50%",
    display: " flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function Menu() {
  const classes = useStyles();
  return (
    <div className={clsx(classes.root)}>
      <Link href="#" replace className={clsx(classes.botones)}>
        <p>Sobre Mi</p>
      </Link>
      <Link href="#" replace className={clsx(classes.botones)}>
        <p>Proyectos Recientes</p>
      </Link>
      <Link href="#" replaceclassName={clsx(classes.foto)}>
        Holi
      </Link>
      <Link href="#" replace className={clsx(classes.botones)}>
        <p>Blog</p>
      </Link>
      <Link href="#" replace className={clsx(classes.botones)}>
        <p>Educación</p>
      </Link>
    </div>
  );
}

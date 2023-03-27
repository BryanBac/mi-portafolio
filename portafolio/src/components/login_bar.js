import Link from "next/link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import { padding } from "@mui/system";

const useStyles = makeStyles(() => ({
  root: {
    display: "grid",
  },
  lgnBar: {
    color: "white",
    display: "flex",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    padding: "2%"
  },
}));

export default function LoginBar() {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <div className={clsx(classes.root)}>
      <Link href="#" replace className={clsx(classes.lgnBar)}>
        <p>Login</p>
      </Link>
    </div>
  );
}

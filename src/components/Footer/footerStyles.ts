import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  footer: {
    backgroundColor: "#064678",
    minHeight: "500px",
  },
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  footerElement: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "nowrap",
    width: "50%",
  },
  text: {
    fontSize:"16px",
    color:"white",
    fontWeight:600,
  },
});

export default useStyles;

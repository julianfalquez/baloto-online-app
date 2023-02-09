import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  toolbar: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
  },
  stickyFooter: {
    backgroundColor: "#ffff",
    position: "fixed",
    bottom: 0,
    width:'100%'
  },
});

export default useStyles;

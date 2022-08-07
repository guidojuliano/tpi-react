import NavigationIcon from "@mui/icons-material/Navigation";
import Fab from "@mui/material/Fab";
import "../App.css";

export default function ButtonGoTop() {
  return (
    <Fab color="warning" aria-label="navigation" className="container-go-top">
      <NavigationIcon className="button-go-top" />
    </Fab>
  );
}

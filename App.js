import Alumn from "./components_alumn/Alumn.js";
import Achievements from "./components_alumn/Alumn_achievement.js";


const achieves = ["peter pan peter","Meinu Daku Daku...","ambarsariya lageya.","Naatu Naatu",]

const values=[
  {person_pic:"",person_name:"r",person_desc:"abcdef"},{person_pic:"",person_name:"r",person_desc:"abcdef"},{person_pic:"",person_name:"r",person_desc:"abcdef"},{person_pic:"",person_name:"r",person_desc:"abcdef"},]



  function App() {
  return (
    <div className="alumni_page">
      <div className="information_alumns">
        <Alumn value={values}/>
      </div>
      <div className="alumn_achievements">
        <Achievements achieves={achieves} />
      </div>
    </div>

  );
}

export default App;

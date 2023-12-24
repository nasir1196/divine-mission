import Container from "../components/Container";
import Dashboard from "./Dashboard/Dashboard";

const IsAdmin = () => {
  return (
    <div className="my-5">
      <Container>
        <div className="flex flex-row gap-4">
          <div className="w-48">
            <Dashboard />
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum
              rerum, quibusdam animi tempore expedita sapiente possimus facilis
              fugit itaque alias quae officia sequi voluptatem. Sunt eos quo
              voluptates illo ex?
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default IsAdmin;

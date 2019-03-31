import react from "React";


class Greeting extends React.Component{
    
        constructor(props){
            super(props);
            this.state = { username: '' };
          }
         
          handleChange = event => {
            this.setState({ username: event.target.value });
          };
         
          render() {
            return (
              <React.Fragment>
                <form>
                  <label htmlFor="username">username</label>
                  <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                  />
                </form>
         
                <h3>Your username is: {this.state.username}</h3>
              </React.Fragment>
            );
          }
        }
    
        export default Greetings;

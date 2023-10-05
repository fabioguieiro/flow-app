# Flow app

![image](https://github.com/fabioguieiro/flow-app/assets/32694040/b243e81b-837b-4a1e-bd76-d2210846b717)

The goal of this project is to build a decision engine, a software solution that allows non-technical users to design decision-making algorithms (decision policies) and deploy them without the assistance of a programmer. 

## Requirements

- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) / [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable)
- [python](https://www.python.org/downloads)
## How to Run

Follow these steps to run the project locally:

**Clone the Repository:**

    git clone https://github.com/fabioguieiro/flow-app.git


### back end

1. **Change Directory::**

    ```bash
    cd flow-app/backend/flow-env

    ```

2. **Start the enviroment:**

    On Mac/Linux

    ```bash
    source bin/activate
    ```
    
    On Windows

    ```bash
    bin/activate
    ```

3. **Make sure the dependencies are installed:**

   On Mac/Linux
   
    ```bash
    python3 -m pip install pymongo flask flask-cors
   ```
    
   On Windows

   ```bash
    python -m pip install pymongo flask flask-cors
   ```

5. **Run the server:**
   
   On Mac/Linux
   
    ```bash
    python3 app.py
   ```
    
   On Windows
   ```bash
    python app.py
   ```


### front end


1. **Change Directory::**

    ```bash
    cd flow-app/frontend

    ```

2. **Install Dependencies:**

    ```bash
    npm install

    ```

    or
   
   ```bash
    yarn

    ```

4. **Start the Development Server:**

    ```bash
    npm run dev

    ```

    or

   ```bash
    yarn run dev

    ```
6. **Access the Application:**
   Open http://localhost:3000 on your browser

## Features

- Click on element areas on side menu and then click 'create element' to see it on flow area
- Clicking on a decision element will show you a little form for you to fill info that will be shown on the element 
- Drag and drop elements on flow area
- Click and move on elements handlers to conect then
- Give names to the edges, if you wish
- Submit your flow chart clicking on the green button on the bottom-right of the flow area
- If your flux is complete you'll see a nice success modal, and your flux will be stored on the database
- If your flux is not complete a modal will sugest you to check your flow chart and complete it!

## Project Desicions

### Design
A minimalistic design was not chosen by chance, I wanted to give the user the perception that the system is very easy to use by using simple shapes and nice solid colors.

### React
The react framework was chosen, firstly because of my background using it, and also for the power to react to changes on DOM immediately.

### React Flow
The reactflow lib was chosen because it has many functionalities that i needed already implemented, like drag and drop, edge connections, edge/node data structure and so on.

### Python
The python language was chosen because of my background using it, and because it has a very simple syntax making it easy for a front end focused developer to build a server in a short deadline

## Main technologies

#### front end
- React 18.12
- next 13.5
- typescript 5.2
- tailwind css 3.3
- reactflow 11.9
- axios 1.5
- yup 1.3
- back end

#### back end
- python 13.2
- flask 2.3
- pymongo 4.5


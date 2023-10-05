# Flow app

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
   
    python -m pip install pymongo flask flask-cors

4. **Run the server:**
   
   On Mac/Linux
   
    ```bash
    python3 app.py
   ```
    
  On Windows
   
    ```python app.py```


# front end


1. **Change Directory::**

    ```bash
    cd flow-app/frontend

    ```

2. **Install Dependencies:**

    ```bash
    npm install

    ```

3. **Start the Development Server:**

    ```bash
    npm run dev

    ```

4. **Access the Application:**
   Open http://localhost:3000 on your browser

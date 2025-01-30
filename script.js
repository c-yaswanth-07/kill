body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #2c3e50;
    color: white;
    font-family: Arial, sans-serif;
}

#gameArea {
    position: relative;
    width: 800px;
    height: 600px;
    border: 2px solid #ecf0f1;
    overflow: hidden;
}

.target {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: red;
    border-radius: 50%;
    display: none;
}

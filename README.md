# ODOO HACKATHON 2025 - SKILL SWAP PLATFORM (Problem Statement 1) 

Team Name - DOZO
Email - devansheegupta0@gmail.com
Project Name - SkillBuddy
Technology Used - (React.js - Python,Django,Django REST - sqlite)

# Frontend -
To run frontend on server:

    cd Project-frontend
    npm build
    npm run dev

# Backend -
## A. Initial Setup Required-

1. Install Python
2. Install Virtual Environment
3. Move to Project directory and create + activate + deactivate virtualenv
4. Install required packages of this project
5. Run Project on server

### 1. Install Python - [if already installed --> SKIP THIS]

#### Windows: 

    Download from [python.org](https://www.python.org/downloads/windows/).

#### Linux (Debian/Ubuntu):

    sudo apt update
    sudo apt install python3 python3-pip
    
#### macOS:  

(Homebrew required)

**Install HomeBrew -**

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

then install python -

    brew install python
    

### 2. Install Virtual Environment (virtualenv) - [if already installed --> SKIP THIS]

    # windows - 
        pip install virtualenv
    
    # macOS/linux -
        sudo pip3 install virtualenv

### 3. Move to Project directory and create + activate virtualenv - 

* move to the created project directory
* create the virtualenv (virtual environment is named venv here)

Run this commands -

        # Windows
            cd ProjectDirectory
            python -m venv venv

        # macOS/Linux
            cd ProjectDirectory
            python3 -m venv venv


* **Activate** Virtualenv - 

here venv is virtualenv's name,

    # Windows(CMD)
        venv\Scripts\activate

    # Windows(Powershell)
        .\venv\Scripts\Activate.ps1

    # macOS/Linux
        source venv/bin/activate
        

* if want to exit or **Deactivate** Virtualenv - 

    deactivate


### 4. Install required packages of this project

    # Windows
        pip install -r requirements.txt

    # macOS/Linux
        pip3 install -r requirements.txt


### 5. Run project on server

Run these commands -

    # Windows
        cd ProjectName
        python manage.py runserver

    # macOS/Linux
        cd ProjectName
        python3 manage.py runserver

You can see your server running on http://127.0.0.1:8000.
By default, port = 8000.

If you want to change the server’s port, pass port number -

    # Windows
        python manage.py runserver [port_number]

    # macOS/Linux
        python3 manage.py runserver [port_number]

## Snippets for Project  -

### Read operation -

<img width="1440" alt="Screenshot 2024-04-17 at 2 01 46 PM" src="https://github.com/Devanshee-Gupta/Django-training-2/assets/154060860/5470e806-4084-4c90-a308-b0e0922c803a">

from flask import Flask, render_template

app = Flask(__name__)

try:
    @app.route('/')
    def hello():
        return render_template("index.html")
except:
    print('Error')
if __name__ == "__main__":
    app.run(debug=True, host='127.0.0.1', port=5000)

# from flask import Flask

# app = Flask(__name__)

# print("Flask App")

# @app.route('/', methods=['GET', 'POST'])
# def funk():
#     return 'I am Flask sample application.'

# if __name__ == "__main__":
#     app.run(debug=True)    
    # from waitress import serve
    # serve(app, host="0.0.0.0", port=8080)
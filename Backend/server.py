import argparse
import io
from PIL import Image
import datetime
import torch
import cv2
import numpy as np
import tensorflow as tf
from re import DEBUG, sub
from flask import Flask, render_template, request, redirect, send_file, url_for, Response,jsonify
from werkzeug.utils import secure_filename, send_from_directory
import os
import subprocess
from subprocess import Popen
import re
import requests
import shutil
import time
import glob
from ultralytics import YOLO
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


@app.route('/imgupload', methods=['POST'])
def sendback():

    try:
        if 'file' in request.files:
            f = request.files['file']
            basepath = os.path.dirname(__file__)
            filepath = os.path.join(basepath, 'uploads', f.filename)
            print("upload folder is", filepath)
            f.save(filepath)

            global imgpath
            predict_img.imgpath = f.filename
            print("printing predict", predict_img)

            file_extension = f.filename.rsplit(".", 1)[-1].lower()
            if file_extension:
                img = cv2.imread(filepath)
                frame = cv2.imencode(".jpg", cv2.UMat(img))[1]
                image = Image.open(io.BytesIO(frame))

                # Perform the detection
                yolo = YOLO('best.pt')
                detections = yolo.predict(image, save=True)

        return jsonify({'text': 'hello'})

    except Exception as e:
        return jsonify({'text': str(e)}), 500
    
    


if __name__ == '__main__':
    app.run(debug=True, port=5000)

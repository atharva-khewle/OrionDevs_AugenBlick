import argparse
import io
import base64  # Import base64 module
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

garbage_objects = [898,899,923,999,419,455,463,473,519,653,569,968,700,728,737,783,790,806,868,879,901,907,910,917]
import argparse
import io
import base64  # Import base64 module
from PIL import Image
import datetime
import torch
import cv2
import numpy as np
import tensorflow as tf
from re import DEBUG, sub
from flask import Flask, render_template, request, redirect, send_file, url_for, Response, jsonify
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

garbage_objects = [898, 899, 923, 999, 419, 455, 463, 473, 519, 653, 569, 968, 700, 728, 737, 783, 790, 806, 868, 879, 901, 907, 910, 917]

@app.route('/imgupload', methods=['POST'])
def sendback():
    try:
        if 'file' in request.files:
            f = request.files['file']
            basepath = os.path.dirname(__file__)
            filepath = os.path.join(basepath, 'uploads', secure_filename(f.filename))
            f.save(filepath)

            imgpath = f.filename

            file_extension = f.filename.rsplit(".", 1)[-1].lower()
            if file_extension == 'jpg':
                img = cv2.imread(filepath)
                frame = cv2.imencode(".jpg", cv2.UMat(img))[1]
                image = Image.open(io.BytesIO(frame))

                # Perform the detection
                yolo = YOLO('yolov8n-cls.pt')
                # Construct the source file path
                source_path = os.path.join(basepath, "uploads", imgpath)

                print("Source path:", source_path)
                detections = yolo.predict(source=source_path, save=True)
                newpath = os.path.join(basepath, detections[0].save_dir, imgpath)
                print("New path:", newpath)

                # Read the image from newpath
                with open(newpath, "rb") as f:
                    image_data = f.read()

                # Encode the image to base64
                encoded_image = base64.b64encode(image_data).decode()

                top5_labels = detections[0].probs.top5
                count = sum(label in garbage_objects for label in top5_labels)

                return jsonify({'count': count, 'image': encoded_image})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

    # Default response if file upload failed
    return jsonify({'error': 'File upload failed'}), 400

if __name__ == '__main__':
    app.run(debug=True, port=5000)

if __name__ == '__main__':
    app.run(debug=True, port=5000)
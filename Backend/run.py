from ultralytics import YOLO

model = YOLO("yolov8x-cls.pt")

# results=model("./bottles.jpg")
results=model.predict(source="./bottles.jpg", save=True)
print("hiii")
print(results[0].probs.top5)
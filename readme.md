PHONE SENSOR TRIANGULATION

Overview:

This project utilizes the gyroscope and accelerometer sensors available on modern smartphones to estimate the height of objects such as trees and buildings, as well as distances to islands and stars. The technique involves triangulating measurements from these sensors along with known distances from the ground to the phone to calculate the height or distance of the target object.

How it Works:

The gyroscope and accelerometer sensors provide data about the orientation and movement of the phone. By analyzing changes in orientation and acceleration, along with the known distance from the ground to the phone (e.g., obtained through user input or GPS data), the application calculates the height or distance of the target object using trigonometric principles.




Grant Permissions:
Ensure that the browser has permission to access the gyroscope and accelerometer sensors of your phone. Most modern browsers prompt users to allow access to these sensors.
Ensure your computer or phone has access to camera a it is essential

Calibrate: Calibrate the application by placing the phone at a known distance from the ground. This distance can be entered manually or obtained through GPS data if available or a distance of 20 metres from the object.

Point to Target Object: Point the phone towards the target object (e.g., tree, building, island, star).

View Results: The estimated height or distance of the target object will be displayed on the screen.

Tech Stack:

HTML: Used for structuring the user interface.
CSS: Styling the user interface for better user experience.
JavaScript: Processing sensor data, performing calculations, and updating the UI dynamically.

Disclaimer:

This project provides estimates based on sensor data and trigonometric calculations. 
The accuracy of the results may vary depending on various factors such as sensor precision, environmental conditions, and calibration accuracy.
Use the application as a tool for estimation and exercise caution when relying on its results for critical purposes.


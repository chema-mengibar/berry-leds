import time
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM) # GPIO.BOARD
GPIO.setwarnings(False)

pin_red = 17
pin_green = 18
pin_blue = 16

GPIO.setup(pin_red, GPIO.OUT)
GPIO.setup(pin_green, GPIO.OUT)
GPIO.setup(pin_blue, GPIO.OUT)

GPIO.output(pin_red, GPIO.LOW) #HIGH

GPIO.output(pin_green, GPIO.LOW)
GPIO.output(pin_blue, GPIO.LOW)

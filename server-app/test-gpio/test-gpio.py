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

GPIO.output(pin_red, GPIO.LOW)
GPIO.output(pin_green, GPIO.LOW)
GPIO.output(pin_blue, GPIO.LOW)


time.sleep(0.2)

red = GPIO.PWM( pin_red, 75)
green = GPIO.PWM( pin_green, 75)
blue = GPIO.PWM( pin_blue, 75)


colors = {
	'mint': (1,1,1),
	'egg': (100,100,0),
	'lila' : (1,1,1)
}

selectedColor = 'egg'

def convertToFreq( rgbInt ):
	return 100 - ( float(rgbInt * 100) / 255 )


red.start( colors[selectedColor][0] )
green.start( colors[selectedColor][1] )
blue.start( colors[selectedColor][2] )


input('Press return to stop:') 

GPIO.output(pin_red, GPIO.LOW)
GPIO.output(pin_green, GPIO.LOW)
GPIO.output(pin_blue, GPIO.LOW)

red.stop()
green.stop()
blue.stop()

GPIO.cleanup()




import RPi.GPIO as GPIO

channel = 17

GPIO.setmode(GPIO.BCM) # GPIO.BOARD

# Setup your channel
GPIO.setup(channel, GPIO.OUT)
GPIO.output(channel, GPIO.LOW)

# To test the value of a pin use the .input method
#channel_is_on = GPIO.input(channel)  # Returns 0 if OFF or 1 if ON

print( 'PIN 17', GPIO.output(channel) )

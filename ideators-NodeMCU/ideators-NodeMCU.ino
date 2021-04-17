#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include<stdio.h>
#include<string.h>

int deskPin[] = {14,12,13,15,3};

// Wi-Fi Credentials
const char* ssid = "YourWifiName";
const char* password = "YourWifiPassword";

void setup() {
  for(int i = 0; i < 5; i++){
    pinMode(deskPin[i],OUTPUT);
  }
  
  Serial.begin(115200);

  WiFi.begin(ssid, password);

  while (WiFi.status() != WL_CONNECTED) {

    delay(1000);
    Serial.print("Connecting..\n");

  }
  Serial.print("Connected\n");

}

void loop() {
  if (WiFi.status() == WL_CONNECTED) { //Check WiFi connection status
    Serial.print("Requesting\n");
    HTTPClient http;  //Declare an object of class HTTPClient
    http.begin("http://ideators-server.herokuapp.com/api/desk");  //Specify request destination
    int httpCode = http.GET();                                  //Send the request
    if (httpCode > 0) { //Check the returning code

      String payload = http.getString();   //Get the request response payload
      int k = payload.length();
      
      char a[10][1000];
      int j = 0;
      int f = 0;
      for (int i = 1; i < k - 1; i++)
      {
        a[j][f] = payload[i];
        if (payload[i] == '}')
        {
          j++;
          f = -1;
          i++;
        }
        f++;
      }
      for (int i = 0; i < 5; i++)
      {
        if (a[i][9] == 't')
        {
          Serial.print(i+1);
          Serial.print("Bulb is on\n");
          digitalWrite(deskPin[i], HIGH);
        }
        else
        {
          Serial.print(i+1);
          Serial.print("Bulb is off\n");
          digitalWrite(deskPin[i], LOW);
        }

      }
    }

    http.end();   //Close connection

  }
  delay(2000);
}

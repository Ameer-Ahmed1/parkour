import React from "react";
import { Loader } from "@googlemaps/js-api-loader";
import image from "../../images/location2.png";

let API_KEY = "AIzaSyDhx8cq9h2QQv7axZlQN1EaYQn18Ii-W3s";

const google = window.google;
const loader = new Loader({
  apiKey: API_KEY,
  version: "weekly",
});

const users = [
  {
    name: "Zeina Toama ",
    "e-mail": "Zeina@gmail.com ",
    phone: "0526326903",
    rating: "6.5",
    age: "26",
    owner: true,
    "official docs": "docs1.File",
    ownerRating: "8.5",
    Dimensions: [4, 5],
    position: { lat: 32.12004106949362, lng: 34.804741336266325 },
    bankAccount: "848848373",
  },
  {
    name: "Duaa Zubidat",
    "e-mail": "Duaa@gmail.com ",
    phone: "0526326943",
    rating: "8.5",
    age: "46",
    owner: true,
    "official docs": "docs2.File",
    ownerRating: "6.5",
    Dimensions: [5, 10],
    position: { lat: 32.11831485876209, lng: 34.8018355049436 },
    bankAccount: "123456789",
  },
  {
    name: "Noor Mahajne ",
    "e-mail": "Noor@gmail.com ",
    phone: "0523366903",
    rating: "9.5",
    age: "83",
    owner: true,
    "official docs": "doc3.File",
    ownerRating: "2.5",
    Dimensions: [4, 5],
    position: { lat: 32.11378539749989, lng: 34.80728474099319 },
    bankAccount: "987654321",
  },
  {
    name: "Amir Kannane",
    "e-mail": "Amir@gmail.com ",
    phone: "0526322903",
    rating: "6.5",
    age: "42",
    owner: true,
    "official docs": "docs4.File",
    ownerRating: "9.0",
    Dimensions: [5, 10],
    position: { lat: 32.108823764853625, lng: 34.80526685714722 },
    bankAccount: "192837465",
  },
  {
    name: "Nusser Anabassu ",
    "e-mail": "Nusser@gmail.com ",
    phone: "0526329903",
    rating: "5.5",
    age: "19",
    owner: true,
    "official docs": "docs5.File",
    ownerRating: "8.5",
    Dimensions: [6, 7],
    position: { lat: 32.11066596997447, lng: 34.80345343786088 },
    bankAccount: "918273645",
  },
  {
    name: "Haribo Daadous ",
    "e-mail": "Haribo@gmail.com ",
    phone: "0523326903",
    rating: "7.5",
    age: "26",
    owner: true,
    "official docs": "docs6.File",
    ownerRating: "3.0",
    dimensions: [4, 5],
    position: { lat: 32.112362552078636, lng: 34.80491211301439 },
    bankAccount: "087542765",
  },
];

// function addMarker(lang, lat, user) {}

export default function Map() {
  const errorCallback = (error) => {
    console.log(error);
  };

  const successCallback = (position) => {
    let lat = position.coords.latitude;
    let lang = position.coords.longitude;

    loader.load().then(async () => {
      const { Map } = await google.maps.importLibrary("maps");
      let map = new Map(document.getElementById("map"), {
        center: { lat: lat, lng: lang },
        zoom: 18,
      });

      let myMarker = await new google.maps.Marker({
        position: { lat: lat, lng: lang },
        map,
        title: "my location",
      });

      users.forEach(async (user) => {
        let newMarker = await new google.maps.Marker({
          position: user.position,
          map,
          icon: image,
          title: "new location",
        });
        newMarker.setMap(map);
      });

      const styles = {
        default: [],
        hide: [
          {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }],
          },
          {
            featureType: "transit",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
          },
        ],
      };

      map.setOptions({ styles: styles["hide"] });

      map.addListener("click", (mapsMouseEvent) => {
        console.log(JSON.stringify(mapsMouseEvent.latLng.toJSON()));
      });

      myMarker.setMap(map);
      myMarker.addListener("click", () => {});
    });
  };

  const currentPos = navigator.geolocation.getCurrentPosition(
    successCallback,
    errorCallback
  );

  const id = navigator.geolocation.watchPosition(
    successCallback,
    errorCallback
  );

  return <div id="map" className="map"></div>;
}

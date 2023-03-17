import { IDrone, IMedication } from "../../domain/entity"
import { eDroneModel, eDroneState } from "../../domain/entity/Drone"

type db = {
    drone: IDrone[],
    medication: IMedication[]
}

export const dataBase:db = {
    drone: [
        {
          "serialNumber": "ABC123",
          "model": eDroneModel.Heavyweight,
          "weightLimit": 400,
          "batteryCapacity": 90,
          "state": eDroneState.IDLE
        },
        {
          "serialNumber": "XYZ789",
          "model": eDroneModel.Cruiserweight,
          "weightLimit": 250,
          "batteryCapacity": 80,
          "state": eDroneState.LOADING
        },
        {
          "serialNumber": "PQR456",
          "model": eDroneModel.Middleweight,
          "weightLimit": 300,
          "batteryCapacity": 70,
          "state": eDroneState.LOADED
        },
        {
          "serialNumber": "DEF234",
          "model": eDroneModel.Lightweight,
          "weightLimit": 150,
          "batteryCapacity": 50,
          "state": eDroneState.DELIVERED
        },
        {
          "serialNumber": "GHI567",
          "model": eDroneModel.Cruiserweight,
          "weightLimit": 400,
          "batteryCapacity": 60,
          "state": eDroneState.RETURNING
        }
      ]
      ,
    medication: [
        {
            "name": "Item_1",
            "weight": 200,
            "code": "ABCD_123",
            "image": "https://example.com/image_1.jpg",
            "drone": "ABC123"
          },
          {
            "name": "Item_2",
            "weight": 20,
            "code": "EFGH_456",
            "image": "https://example.com/image_2.jpg",
            "drone": "ABC123"
          },
          {
            "name": "Item_3",
            "weight": 30,
            "code": "IJKL_789",
            "image": "https://example.com/image_3.jpg"
          },
          {
            "name": "Item_4",
            "weight": 40,
            "code": "MNOP_012",
            "image": "https://example.com/image_4.jpg"
          },
          {
            "name": "Item_5",
            "weight": 50,
            "code": "QRST_345",
            "image": "https://example.com/image_5.jpg"
          },
          {
            "name": "Item_6",
            "weight": 60,
            "code": "UVWX_678",
            "image": "https://example.com/image_6.jpg"
          },
          {
            "name": "Item_7",
            "weight": 70,
            "code": "YZAB_901",
            "image": "https://example.com/image_7.jpg"
          },
          {
            "name": "Item_8",
            "weight": 80,
            "code": "CDEF_234",
            "image": "https://example.com/image_8.jpg"
          },
          {
            "name": "Item_9",
            "weight": 90,
            "code": "GHIJ_567",
            "image": "https://example.com/image_9.jpg"
          },
          {
            "name": "Item_10",
            "weight": 100,
            "code": "KLMN_890",
            "image": "https://example.com/image_10.jpg"
          },
          {
            "name": "Item_11",
            "weight": 110,
            "code": "OPQR_123",
            "image": "https://example.com/image_11.jpg"
          },
          {
            "name": "Item_12",
            "weight": 120,
            "code": "STUV_456",
            "image": "https://example.com/image_12.jpg"
          },
          {
            "name": "Item_13",
            "weight": 130,
            "code": "WXYZ_789",
            "image": "https://example.com/image_13.jpg"
          },
          {
            "name": "Item_14",
            "weight": 140,
            "code": "ABCD_012",
            "image": "https://example.com/image_14.jpg"
          },
          {
            "name": "Item_15",
            "weight": 150,
            "code": "EFGH_345",
            "image": "https://example.com/image_15.jpg"
          }       
    ]
}
  
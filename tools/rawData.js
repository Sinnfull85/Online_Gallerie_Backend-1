const express = require('express')
const mongoose = require('mongoose')
const fetch = require('node-fetch')
const GalleryData = require('../models/galleryData')

const fetchData = async () => {
  try {
    const response = await fetch(
      'https://collectionapi.metmuseum.org/public/collection/v1/search?departmentId=11&q=a'
    )
    const data = await response.json()


    for (const id of data.objectIDs) {
      await new Promise(resolve => setTimeout(resolve, 1000))
      fetchDetailData(id)
    }
  } catch (e) {
    console.log(e)
  }
}

fetchData()

const fetchDetailData = async idNumber => {
  try {
    const response = await fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${idNumber}`
    )
    const data = await response.json()
    console.log(data)
  } catch (e) {
    console.log(e)
  }
}

const createGallery = async (req, res, next) => {
  const {
    title,
    period,
    primaryImage,
    primaryImageSmall,
    classification,
    objectDate,
    medium,
    dimensions,
    objectURL,
    artistDisplayName,
    artistDisplayBio,
    objectId
  } = req.body
  try {
    const newGalleryDate = await GalleryData.create({
      title,
      period,
      primaryImage,
      primaryImageSmall,
      classification,
      objectDate,
      medium,
      dimensions,
      objectURL,
      artistDisplayName,
      artistDisplayBio,
      objectId
    })
    res.json({ data: newGalleryDate })
  } catch (e) {
    next(e)
  }
}

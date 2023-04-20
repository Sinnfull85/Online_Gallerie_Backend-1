const express = require('express')
const mongoose = require('mongoose')
const fetch = require('node-fetch')
const aaa = require('../models/galleryData')

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
    console.log(data.isPublicDomain)
    console.log(data.classification)
    if (data.isPublicDomain === true && data.classification === 'Paintings') {
      console.log(2222)
      createGallery(data)
    }
  } catch (e) {
    console.log(e)
  }
}

const createGallery = async data => {
  console.log(11111)
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
  } = data
  console.log(title)
  try {
    await aaa.create({
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
  } catch (e) {
    console.log(e)
  }
}

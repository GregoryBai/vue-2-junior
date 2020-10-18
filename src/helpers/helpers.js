export const requestData = async (url, method, ...headerObjs) => {
  try {
    let requestHeadersObjs = {}

    for (let headerObj of headerObjs) {
      Object.assign(requestHeadersObjs, headerObj)
    }
    // console.log(requestHeadersObjs)
    const jResp = await fetch(url, {
      method,
      headers: {
        ...requestHeadersObjs,
      },
    })
    return await jResp.json()
  } catch (e) {
    console.log(e)
  }
}

export const filledRequestData = (field) =>
  requestData(
    "https://track-api.leadhit.io/client/test_auth",
    "GET",
    { "Api-Key": "5f8475902b0be670555f1bb3:eEZn8u05G3bzRpdL7RiHCvrYAYo" },
    { "Leadhit-Site-Id": field }
  )

using Microsoft.AspNetCore.Mvc;
using System.Net.Http.Headers;

[ApiController]
[Route("api/plant")]
public class PlantController : ControllerBase
{
    [HttpPost("detect-disease")]
    public async Task<IActionResult> DetectDisease(IFormFile image)
    {
        var client = new HttpClient();

        var content = new MultipartFormDataContent();
        var stream = image.OpenReadStream();
        content.Add(new StreamContent(stream)
        {
            Headers =
            {
                ContentType = new MediaTypeHeaderValue(image.ContentType)
            }
        }, "image", image.FileName);

        var response = await client.PostAsync(
            "http://localhost:5000/api/predict",
            content
        );

        var json = await response.Content.ReadAsStringAsync();
        return Content(json, "application/json");

    }
}

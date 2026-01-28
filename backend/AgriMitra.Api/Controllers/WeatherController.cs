using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System.Net.Http;
using System.Text.Json;

namespace AgriMitra.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    [Authorize]
    public class WeatherController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly HttpClient _httpClient;

        public WeatherController(IConfiguration configuration)
        {
            _configuration = configuration;
            _httpClient = new HttpClient();
        }

        [HttpGet]
        public async Task<IActionResult> GetWeather([FromQuery] string city)
        {
            if (string.IsNullOrEmpty(city))
                return BadRequest("City is required");

            var apiKey = _configuration["OpenWeather:ApiKey"];

            var url =
                $"https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={apiKey}";

            var response = await _httpClient.GetAsync(url);

            if (!response.IsSuccessStatusCode)
                return BadRequest("Unable to fetch weather data");

            var content = await response.Content.ReadAsStringAsync();
            var json = JsonDocument.Parse(content);

            return Ok(json.RootElement);
        }
    }
}

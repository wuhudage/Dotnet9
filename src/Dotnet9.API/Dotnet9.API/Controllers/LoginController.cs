﻿using Dotnet9.Common.Helpers;
using Microsoft.AspNetCore.Mvc;

namespace Dotnet9.API.Controllers;

[Route("api/[controller]")]
[ApiController]
public class LoginController : ControllerBase
{
    [HttpGet]
    public async Task<object> GetJwtStr(string name, string pass)
    {
        var tokenModel = new TokenModelJwt { Uid = 1, Role = "Admin" };
        var jwtStr = JwtHelper.IssueJwt(tokenModel);
        const bool success = true;
        return await Task.FromResult(Ok(new
        {
            success,
            token = jwtStr
        }));
    }
}
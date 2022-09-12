﻿namespace Dotnet9.WebAPI.FluentValidations.Login;

public class LoginByUserNameAndPwdRequestValidator : AbstractValidator<LoginByUserNameAndPwdRequest>
{
    public LoginByUserNameAndPwdRequestValidator()
    {
        RuleFor(e => e.UserName).NotNull().WithMessage("用户名不能为Null").NotEmpty().WithMessage("用户名不能为空");
        RuleFor(e => e.Password).NotNull().WithMessage("密码不能为Null").NotEmpty().WithMessage("密码不能为空");
    }
}
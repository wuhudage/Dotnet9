﻿namespace Dotnet9.Models.ViewModels.Questions;

public class CreateQuestionInputDto
{
    public string? Title { get; set; }

    public string? Content { get; set; }

    public string? Categories { get; set; }

    public string? Tags { get; set; }
}
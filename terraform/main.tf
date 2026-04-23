terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-west-2"
}

resource "aws_s3_bucket" "lab_bucket" {
  bucket = "cicd-lab-bucket-${random_id.id.hex}"
}

resource "random_id" "id" {
  byte_length = 4
}
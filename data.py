from datasets import load_dataset
from transformers import AutoTokenizer

dataset = load_dataset("Amod/mental_health_counseling_conversations")

print(dataset['train'][0])
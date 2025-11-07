import React from "react";
import {
  Box,
  Typography,
  Divider,
  Container,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Overview = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      {/* ===== Page Title ===== */}
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        sx={{ color: "#000" }} 
      >
        Project Overview: Semantic Analysis using Topic Modeling
      </Typography>

      <Divider sx={{ mb: 4 }} />

      {/* ===== Abstract ===== */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#555" }} 
        >
          Abstract
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The exponential growth of academic publications has created challenges for
          researchers in identifying emerging themes and making sense of large-scale
          textual data. This project compares traditional topic modeling (LDA) with
          BERTopic to extract coherent, interpretable, and trending research themes.
          The framework integrates NLP preprocessing, coherence evaluation, automated
          topic labeling, and temporal trend analysis to guide impactful future research.
        </Typography>
      </Paper>

      {/* ===== Introduction ===== */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#555" }}
        >
          Introduction
        </Typography>
        <Typography variant="body1" color="text.secondary">
          The continuous surge of academic publications makes it challenging to track
          evolving research areas. Topic modeling, especially LDA, helps discover hidden
          themes but often lacks interpretability. Our project enhances this by combining
          semantic-rich embeddings from BERTopic with robust NLP preprocessing and
          coherence evaluation to improve topic quality and meaning.
        </Typography>
      </Paper>

      {/* ===== Related Studies ===== */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#555" }}
        >
          Related Studies
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#777" }}>
            1. “Benchmarking Topic Models on Scientific Articles using BERTeley”
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Benchmarks LDA and BERTopic on scientific papers using coherence and
            interpretability metrics. Focuses on topic extraction across various disciplines.
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#777", mt: 2 }}>
            2. “Unsupervised Machine Learning Approaches in NLP: A Comparative Study of Topic Modeling with BERTopic and LDA”
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Analyzes student responses to educational policy using LDA and BERTopic. Uses
            the “Boses Ko” toolkit for feedback analysis and thematic extraction.
          </Typography>
        </Box>

        <Typography variant="subtitle1" fontWeight="bold" sx={{ color: "#555" }}>
          Distinct Features of Our Approach:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="• Temporal trend analysis for visualizing evolving topics over time." />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Automated topic labeling for improved interpretability." />
          </ListItem>
        </List>
      </Paper>

      {/* ===== Objectives ===== */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#555" }}
        >
          Objectives
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="1. Preprocess research abstracts with NLP techniques (tokenization, lemmatization, etc.)." />
          </ListItem>
          <ListItem>
            <ListItemText primary="2. Compare LDA (baseline) and BERTopic (optimized) for topic modeling." />
          </ListItem>
          <ListItem>
            <ListItemText primary="3. Evaluate topic quality using c_v coherence metrics." />
          </ListItem>
          <ListItem>
            <ListItemText primary="4. Conduct temporal trend analysis to identify rising or declining research themes." />
          </ListItem>
          <ListItem>
            <ListItemText primary="5. Implement automated topic labeling for improved interpretability." />
          </ListItem>
          <ListItem>
            <ListItemText primary="6. Provide actionable insights for future research directions." />
          </ListItem>
        </List>
      </Paper>

      {/* ===== Dataset ===== */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#555" }}
        >
          Dataset
        </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
                The project uses the{" "}
                <a
                href="https://www.kaggle.com/datasets/Cornell-University/arxiv"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    color: "#555",             
                    textDecoration: "underline",        
                    fontWeight: 500,
                    textUnderlineOffset: "2px",
                }}
                >
                ArXiv Metadata Dataset from Kaggle
                </a>
                , containing research papers from domains like Computer Science, Physics, and
                Mathematics.
            </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="• Format: JSON converted to CSV for easier handling." />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Size: Approximately 50,000 papers." />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Columns: Title, Abstract, Categories, Update_Date." />
          </ListItem>
        </List>
        <Typography variant="body2" color="text.secondary">
          Abstracts form the main text corpus for topic modeling, while Update_Date supports
          temporal trend analysis.
        </Typography>
      </Paper>

      {/* ===== Methodology ===== */}
      <Paper elevation={2} sx={{ p: 3 }}>
        <Typography
          variant="h5"
          fontWeight="bold"
          gutterBottom
          sx={{ color: "#555" }}
        >
          Methodology
        </Typography>
        <List dense>
            <ListItem>
                <ListItemText primary="1. NLP Preprocessing: cleaning, tokenization, lemmatization, and n-gram generation." />
            </ListItem>
            <ListItem>
                <ListItemText primary="2. Baseline Model: LDA for topic extraction and comparison." />
            </ListItem>
            <ListItem>
                <ListItemText primary="3. Optimized Model: BERTopic using transformer-based embeddings." />
            </ListItem>
            <ListItem>
                <ListItemText primary="4. Coherence Evaluation: Using c_v metric for topic quality measurement." />
            </ListItem>
            <ListItem>
                <ListItemText primary="5. Automated Topic Labeling: Embedding-based similarity for descriptive names." />
            </ListItem>
            <ListItem>
                <ListItemText primary="6. Temporal Trend Analysis: Tracking topic evolution using Update_Date." />
            </ListItem>
            <ListItem>
                <ListItemText primary="7. Visual Outputs: Bar charts (coherence) and line charts (trend)." />
            </ListItem>
            <ListItem>
                <ListItemText primary="8. Outcome: Coherent, interpretable, and actionable research themes." />
            </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default Overview;

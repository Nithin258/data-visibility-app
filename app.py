import streamlit as st
import sys
import os

# Fix Python path so it can find backend folder
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from backend.data import data_categories, activity_log

st.set_page_config(page_title="Personal Data Wallet", layout="wide")

st.title("🔐 Personal Data Visibility Dashboard")

st.write("Understand and control how your personal data is used.")

st.divider()

st.header("Your Data Overview")

for data in data_categories:
    col1, col2, col3, col4 = st.columns(4)

    with col1:
        st.subheader(data["name"])

    with col2:
        st.write("Value:", data["value"])

    with col3:
        st.write("Risk:", data["risk"])

    with col4:
        st.toggle(f"Allow {data['name']}", value=True)

st.divider()

st.header("Recent Data Activity")

for activity in activity_log:
    st.write("•", activity)

st.divider()

st.header("Privacy Score")

score = 72
st.progress(score)
st.write(f"Your Privacy Score: {score}/100")
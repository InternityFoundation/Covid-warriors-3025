import React, { Component } from "react";
import axios from "axios";

class DocumentUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passport_photo: null,
      birth_certificate: null,
      community_certificate: null,
      scanned_signature: null,
      sikkim_sub_certificate: null,
      aadhar_card: null,
      eleven_marksheet: null,
      twelve_marksheet: null,
      graduation_marksheet: null,
      graduation_certificate: null,
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChangepp = this.onChangepp.bind(this);
    this.onChangebc = this.onChangebc.bind(this);
    this.onChangecc = this.onChangecc.bind(this);
    this.onChangess = this.onChangess.bind(this);
    this.onChangessc = this.onChangessc.bind(this);
    this.onChangeac = this.onChangeac.bind(this);
    this.onChangeem = this.onChangeem.bind(this);
    this.onChangetm = this.onChangetm.bind(this);
    this.onChangegm = this.onChangegm.bind(this);
    this.onChangegc = this.onChangegc.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData();

    formData.append("passport_photo", this.state.passport_photo);
    formData.append("birth_certificate", this.state.birth_certificate);
    formData.append("community_certificate", this.state.community_certificate);
    formData.append("scanned_signature", this.state.scanned_signature);
    formData.append(
      "sikkim_sub_certificate",
      this.state.sikkim_sub_certificate
    );
    formData.append("aadhar_card", this.state.aadhar_card);
    formData.append("eleven_marksheet", this.state.eleven_marksheet);
    formData.append("twelve_marksheet", this.state.twelve_marksheet);
    formData.append("graduation_marksheet", this.state.graduation_marksheet);
    formData.append(
      "graduation_certificate",
      this.state.graduation_certificate
    );
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:5000/details/upload", formData, config)
      .then((response) => {
        alert("Files Successfully Uploaded!");
      })
      .catch((error) => {
        alert("Files not Uploaded!");
      });
  }
  onChangepp(e) {
    this.setState({ passport_photo: e.target.files[0] });
  }
  onChangebc(e) {
    this.setState({ birth_certificate: e.target.files[0] });
  }
  onChangecc(e) {
    this.setState({ community_certificate: e.target.files[0] });
  }
  onChangess(e) {
    this.setState({ scanned_signature: e.target.files[0] });
  }
  onChangessc(e) {
    this.setState({ sikkim_sub_certificate: e.target.files[0] });
  }
  onChangeac(e) {
    this.setState({ aadhar_card: e.target.files[0] });
  }
  onChangeem(e) {
    this.setState({ eleven_marksheet: e.target.files[0] });
  }
  onChangetm(e) {
    this.setState({ twelve_marksheet: e.target.files[0] });
  }
  onChangegm(e) {
    this.setState({ graduation_marksheet: e.target.files[0] });
  }
  onChangegc(e) {
    this.setState({ graduation_certificate: e.target.files[0] });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div className="meter">
            <span id="myspan"></span>
          </div>
          <div className="myheader">
            <h2>Upload Your file</h2>
          </div>
          <br />
          <p>Upload your passport size photo.</p>
          <input type="file" name="passport_photo" onChange={this.onChangepp} />
          <hr id="myhr" />
          <p>Upload your Birth Certificate.</p>
          <input
            type="file"
            name="birth_certificate"
            onChange={this.onChangebc}
          />

          <hr id="myhr" />
          <p>Upload your Community Certificate.</p>

          <input
            type="file"
            name="community_certificate"
            onChange={this.onChangecc}
          />

          <hr id="myhr" />
          <p>Upload your scanned signature.</p>

          <input
            type="file"
            name="scanned_signature"
            onChange={this.onChangess}
          />

          <hr id="myhr" />

          <p>Upload Sikkim subject Certificate.</p>

          <input
            type="file"
            name="sikkim_sub_certificate"
            onChange={this.onChangessc}
          />

          <hr id="myhr" />
          <p>Upload your scanned Aadhar Card.</p>

          <input type="file" name="aadhar_card" onChange={this.onChangeac} />

          <hr id="myhr" />
          <p>Upload your scanned 11th Marksheet/Certificate.</p>

          <input
            type="file"
            name="eleven_marksheet"
            onChange={this.onChangeem}
          />

          <hr id="myhr" />
          <p>Upload your scanned 12th Marksheet/Certificate.</p>

          <input
            type="file"
            name="twelve_marksheet"
            onChange={this.onChangetm}
          />

          <hr id="myhr" />
          <p>Upload your scanned Graduation Marksheet.</p>

          <input
            type="file"
            name="graduation_marksheet"
            onChange={this.onChangegm}
          />

          <hr id="myhr" />
          <p>Upload your scanned Graduation Certificate.</p>

          <input
            type="file"
            name="graduation_certificate"
            onChange={this.onChangegc}
          />

          <hr id="myhr" />
          <input type="submit" value="Upload Docs" />
        </form>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default DocumentUpload;

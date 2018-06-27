package com.khs.guitar.endpoint;

import java.util.ArrayList;
import java.util.List;

import com.khs.guitar.dataserver.model.Tunings;
import com.khs.sherpa.annotation.Action;
import com.khs.sherpa.annotation.Endpoint;
import com.khs.sherpa.annotation.MethodRequest;

@Endpoint(authenticated = false)
public class TunningEndpoint {
	
	class Tunning {
		public Long id;
		public String description;
		public String notes;
		public String url;	
		
		static final int nextId = 7;
	}
	
	
	@Action(mapping="/tunnings",method = MethodRequest.GET)
	public List<Tunning> tunnings() {
		List<Tunning> results = new ArrayList<Tunning>();
		
		/*Tunning tunning = new Tunning();
		Tunings testTuning = new Tunings();
		tunning.id = testTuning.getId();
		tunning.description = testTuning.getDescription();
		tunning.notes = testTuning.getNotes();
		tunning.url = testTuning.getUrl();
		results.add(tunning);*/
		
		/*Tunning tunning = new Tunning();
		tunning.id = System.currentTimeMillis();
		tunning.description = "Standard";
		tunning.notes = "e,a,d,g,b,e";
		tunning.url = "open.wav";
		results.add(tunning);
					
		tunning = new Tunning();
		tunning.id = System.currentTimeMillis();
		tunning.description = "DROP D";
		tunning.notes = "d,a,d,g,b,e";
		tunning.url = "open.wav";
		results.add(tunning);
		
		
		tunning = new Tunning();
		tunning.id = System.currentTimeMillis();
		tunning.description = "DADGAD";
		tunning.notes = "d,a,d,g,a,d";
		tunning.url = "open.wav";
		results.add(tunning);
		
		tunning = new Tunning();
		tunning.id = System.currentTimeMillis();
		tunning.description = "Half Step Down";
		tunning.notes = "d#,g#,c#,f#,a#,d#";
		tunning.url = "open.wav";
		results.add(tunning);

		
		tunning = new Tunning();
		tunning.id = System.currentTimeMillis();
		tunning.description = "Whole Step Down";
		tunning.notes = "d,g,c,f,a,d";
		tunning.url = "open.wav";
		results.add(tunning);
		
		tunning = new Tunning();
		tunning.id = System.currentTimeMillis();
		tunning.description = "OPEN C";
		tunning.notes = "c,g,c,g,c,e";
		tunning.url = "open.wav";
		results.add(tunning);
		
		tunning = new Tunning();
		tunning.id = System.currentTimeMillis();
		tunning.description = "OPEN D";
		tunning.notes = "d,a,d,f#,a,d";
		tunning.url = "open.wav";
		results.add(tunning);

		
		tunning = new Tunning();
		tunning.id = System.currentTimeMillis();
		tunning.description = "OPEN G";
		tunning.notes = "d,g,d,g,b,d";
		tunning.url = "open.wav";
		results.add(tunning);*/
		
		
		
		
		return results;
	}
	

	
	

}

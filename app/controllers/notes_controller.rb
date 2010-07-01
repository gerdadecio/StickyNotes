class NotesController < ApplicationController
  
  layout "application"
  
  def index
    @notes = Note.all
    if(params[:ajax])
      respond_to do |format|
        format.js{
          render :partial => "notes/notes", :locals => {:notes => @notes}
        }
      end
    end
  end
  
  def create
    note = Note.new(params[:note])
    if note.save
      flash[:notice] = "Successfully Added Note."
    end
    redirect_to request.referrer
  end
  
  def destroy
    note = Note.find(params[:id])
    note.destroy
    redirect_to request.referrer
  end
  
  def update_all
    params[:notes].each do |n|
      @note = Note.find_by_id(n["id"])
      if @note.update_attributes(n)
        flash[:notice] = "Note was successfully updated."
      end
    end
    redirect_to request.referrer
  end

end
